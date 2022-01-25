import Experience from "../Experience.js";
import * as THREE from 'three'
import Environment from "./Environment.js";
import Floor from "./Floor.js";
import Fox from "./Fox.js";

export default class World{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        

        // Test Mesh

        // const testMesh = new THREE.Mesh(
        //     new THREE.BoxGeometry(1,1,1),
        //     new THREE.MeshStandardMaterial()
        // )
        
        // this.scene.add(testMesh)  

        this.resources.on('ready',()=>{
            // Setup (we create the environment map when everything is loaded)
            this.floor = new Floor()
            this.fox = new Fox
            this.environment = new Environment()
            

            
        })

        
        
    }
    update(){
        if(this.fox){
            this.fox.update()
        }
    }
}