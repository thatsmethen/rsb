import ts from 'typescript'

const getComponentName = (node) => {
  if (ts.isFunctionDeclaration(node) && node.name) {
    return node.name.text
  } else if (ts.isVariableDeclaration(node) && node.name) {
    return ts.isIdentifier(node.name) ? node.name.text : undefined
  }
  return undefined
}

export { getComponentName }
