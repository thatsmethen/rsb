import fs from 'fs'
import path from 'path'
import { processComponent } from './processComponent.mjs'

const processComponentsInDirectory = async (componentDir) => {
  fs.readdir(componentDir, async (err, categories) => {
    if (err) {
      console.error(`Failed to read directory: ${err}`);
      return;
    }
    for (const category of categories) {
      if (!/^\..*/.test(category) && category !== 'node_modules') {
        const categoryPath = path.join(componentDir, category)
        fs.readdir(categoryPath, async (err, components) => {
          if (err) {
            console.error(`Failed to read directory: ${err}`);
            return;
          }
          for (const componentName of components) {
            if (!/^\..*/.test(componentName)) {
              const componentPath = path.join(categoryPath, componentName, `${componentName}.tsx`)
              if (fs.existsSync(componentPath)) {
                processComponent(componentPath, componentName)
              }
            }
          }
        })
      }
    }
  })
};


export { processComponentsInDirectory }
