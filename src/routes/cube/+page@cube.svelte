<script lang="ts">
	import * as Threlte from '@threlte/core'
	import * as Three from 'three'
    import * as Extra from '@threlte/extras'
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
    import { onDestroy } from 'svelte';
    import { onMount } from 'svelte'
	import * as Utils from 'three/src/math/MathUtils'

    let rotationY = 0;
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
        position: { x:-3.5, y:3.6, z:0},
        rotation: { x:1, y:rotationY, z:-0.2},
        scale: 8
    }

    let donut2 = {
        position: { x:-3.5, y:3.1, z:0},
        rotation: { x:1, y:rotationY, z:-0.2},
        scale: 8
    }

    let donut3 = {
        position: { x:3.5, y:3.6, z:0},
        rotation: { x:1, y:rotationY, z:-0.2},
        scale: 8
    }

    const rotate = () => {
        donut1.rotation.y = Date.now() /1000;
        donut2.rotation.y = Date.now() /1000;
        donut3.rotation.y = Date.now() /1000;
        animationFrameHandle = requestAnimationFrame(rotate);
    }
    rotate()
    
</script>


<Threlte.Canvas rendererParameters={{antialias: true}}>
    <Threlte.OrthographicCamera {...camera}>

    </Threlte.OrthographicCamera>

    <Threlte.AmbientLight color="white" intensity={0.2} />
    <Threlte.DirectionalLight 
        color="white"
        intensity={2}
        position={{ x:10, y:20}}
        shadow={{
            camera: { top: 8},
        }}
     />

    <Extra.GLTF url="Donut.glb" {...donut1}/>
    <Extra.GLTF url="Donut.glb" {...donut2}/>
    <Extra.GLTF url="Donut.glb" {...donut3}/>

    <Threlte.Mesh
    geometry={new Three.PlaneGeometry(20,20)}
    material={new Three.MeshStandardMaterial({ 
        color: 'white',
        side: Three.DoubleSide,
        })}
        rotation={{ x: Utils.DEG2RAD * 90 }}
        receiveShadow
    />

</Threlte.Canvas>


<style>
</style>