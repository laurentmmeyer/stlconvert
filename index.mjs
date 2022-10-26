import {exportMesh, loadMesh} from "./assetConverter.mjs";

export const convertSTLIntoGLTF = (inputSTLPath, outputGLTFPath) => {
    return loadMesh(inputSTLPath).then(input_mesh => {
        console.log("loaded mesh ", inputSTLPath)
        return exportMesh(outputGLTFPath, input_mesh)
    }).then(() => {
        console.log("ok")
    }).catch(e => {
        console.log("caught error", e)
    })
}
