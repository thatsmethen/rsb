import path from "path";
import ts from 'typescript';
import { getRandomValueForType } from "./styleHelpers.mjs";
import { parseFile } from './testHelpers.mjs';

const kebabCase = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());

const generateTests = (componentInfo, componentName, filePath) => {
  const props = componentInfo.props;
  const sourceFile = parseFile({filePath});
  const importPath = getImportLocation(sourceFile).importLocation;

  let tests = `
import { render } from '@testing-library/react';
import ${componentName} from '${importPath}';
`;

  tests += `describe('${kebabCase(componentName)}', () => {\n`;

  tests += `  it('renders', () => {
    const { container } = render(
      <${componentName} />
    );
    expect(container.firstChild).toHaveClass('${kebabCase(componentName)}');
  });\n`;

  // Generate a test for each prop
  for (let [propName, prop] of Object.entries(props)) {
    tests += `  it('renders with ${propName}', () => {
      const { getByTestId } = render(
        <${componentName} ${propName}="${prop.value}" />
      );
      expect(getByTestId('${kebabCase(componentName)}')).toHaveTextContent('${prop.value}');
    });\n`;
  }

  tests += '});\n';

  return tests;
};

const getProps = (node, componentName, typeChecker) => {
  const props = {};

  const visit = (node) => {
    if (ts.isJsxAttribute(node)) {
      const name = node.name.escapedText;
      const initializer = node.initializer;
      if (initializer && ts.isStringLiteral(initializer)) {
        props[name] = initializer.text;
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(node);

  return props;
};

const getImportLocation = (sourceFile) => {
  // Find the import location of the type/interface
  const importLocation = '../' + sourceFile.fileName.split('/').pop();
  const absoluteImportLocation = path.join(path.dirname(sourceFile.fileName), importLocation + sourceFile.fileName.replace('.test', ''));

  return { importLocation, absoluteImportLocation };
};

export { generateTests, getImportLocation, getProps };
