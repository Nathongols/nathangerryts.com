<script lang="ts">
	import {
        Canvas,
        DirectionalLight,
        PointLight,
        PerspectiveCamera,
        Mesh,
        OrbitControls,
    } from '@threlte/core';
	import * as Three from 'three'
    import * as Extra from '@threlte/extras';
    import { onDestroy } from 'svelte';
    import { onMount } from 'svelte';
	import * as Utils from 'three/src/math/MathUtils'
	import { MeshStandardMaterial, PlaneGeometry,TetrahedronGeometry} from 'three';

    let rotationX = 0;
    let animationFrameHandle;
    
    let camera = {
        position: { x: 0, y: 0, z: 10},
        rotation: { x:0, y:0, z:0},
        zoom: 200
    }

    let pointLight = {
        position: { x:0, y:2, z:2},
        color:'hsl(60,100%,50%)'
    }

    let donut1 = {
        position: { x:0, y:0, z:0},
        rotation: { x:1, y:rotationX, z:-0.2},
        scale: 8
    }

    let donut3 = {
        position: { x:-4, y:3.5, z:0},
        rotation: { x:1, y:rotationX, z:-0.2},
        scale: 8
    }

    let tetra = {
        position: { x:-1, y:3, z:0}
    }

    

</script>

<div class="canvas-wrapper">
    <Canvas rendererParameters={{antialias: true}}>
        <PerspectiveCamera {...camera}>
            <OrbitControls enableDamping/>
        </PerspectiveCamera>
        
        <PointLight 
            intensity={0.7}
            position={{x:0,y:5,z:-10}}
        />
        <PointLight 
            intensity={.7}
            position={{x:-6,y:-2,z:0}}
            rotation={{x:90,y:0,z:45}}
        />
        <PointLight 
            intensity={.7}
            position={{x:6,y:-2,z:0}}
            rotation={{x:90,y:0,z:46}}
        />

        <DirectionalLight 
            color="white"
            intensity={.5}
            position={{ x:0, y:10, z:1}}
            shadow={{
                camera: { top: 8},
            }}
         />
    
        <Extra.GLTF url="Donut.glb" {...donut1}/>
        <Extra.GLTF url="Donut.glb" {...donut3}
        castShadow
        />
        
        <Mesh {...tetra}
            geometry={new TetrahedronGeometry}
            material={new MeshStandardMaterial({color: 'seagreen'})}

        />
        <Mesh 
            geometry={new PlaneGeometry}
            material={new MeshStandardMaterial({color: 'black'})}
            position={{x:0,y:-2,z:0}}
            rotation={{x:-1.5,y:0,z:0}}
            scale={500}
            receiveShadow
        />
    </Canvas>
</div>



<style>
    .canvas-wrapper {
        position: flex;
        height: 970px;
        width: 1810px;
        background-color: rgb(44, 44, 44);
    }
</style>