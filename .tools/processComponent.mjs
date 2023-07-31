import ts from 'typescript';
import fs from 'fs';
import path from 'path';
import {
  generateTests,
  getProps,
} from './componentUtils.mjs';
import {
  parseFile,
} from './testHelpers.mjs';
import prettier from 'prettier';

const processComponent = (filePath, componentName) => {
  const sourceFile = parseFile({ filePath });
  const program = ts.createProgram([sourceFile.fileName], {});
  const typeChecker = program.getTypeChecker();

  let component = null;

  const visit = (node) => {
    if (ts.isClassDeclaration(node)) {
      const className = node.name.text;
      const pascalCaseComponentName = convertToPascalCase(componentName);

      if (className === pascalCaseComponentName) {
        component = { node: node, className };
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);

  try {
    if (component) {
      const props = getProps(component.node, componentName, typeChecker);

      const componentInfo = { name: component.className, props };

      const generatedTests = generateTests(componentInfo, component.className, filePath);

      const testDirectory = path.join(filePath, '../__tests__');

      if (!fs.existsSync(testDirectory)) {
        fs.mkdirSync(testDirectory);
      }

      const writeFilePath = path.join(filePath, '../', `/__tests__/${componentName}.spec.ts`);

      prettier.format(generatedTests, { parser: 'typescript', singleQuote: true, jsxSingleQuote: true, singleAttributePerLine: false, tabWidth: 4 }).then((formattedTest) => {
        fs.writeFileSync(writeFilePath, formattedTest);
        console.log(`Successfully generated test at: ${writeFilePath}`);
      })
    }
  } catch (err) {
    console.log('error', err);
  }

  return { component: component?.className };
};

// Utility function to convert kebab-case to PascalCase
function convertToPascalCase(text) {
  return text
    .replace(/(^\w|-\w)/g, clearAndUpper)
    .replace(/-/g, "");
}

function clearAndUpper(text) {
  return text.replace(/-/, "").toUpperCase();
}

export { processComponent };
