<script>
	import { 
		T,
		Mesh, 
		OrbitControls, 
		PerspectiveCamera,
		useFrame,
		PointLight, 
		AmbientLight} from '@threlte/core'
	import { 
		DodecahedronGeometry, 
		MeshBasicMaterial, 
		Color, 
		BoxGeometry,
		MeshDepthMaterial,
		MeshMatcapMaterial,} from 'three'
	import {
		useCursor
	
	} from '@threlte/extras'
	let rotation = 0
	let rotationlarge = 0
	let size = 0.5
	useFrame(() => {
		rotation += 0.001
		rotationlarge -= 0.0005
	})

	const lerp = (x, y, a) => x * (1 - a) + y * a;

	const { onPointerEnter: cursorEnter } = useCursor('initial')

	const onPointerEnter = () => {
		
	}
	const onPointerLeave = () => {
	}

</script>

<PerspectiveCamera 
	position={{x:0,y:0,z:4}}
	rotation={{x:0,y:0}}
	>
</PerspectiveCamera>

<PointLight
	position={{x:0,y:2,z:0}}
	scale={2}
	intensity={1.0}
	>
</PointLight>

<Mesh 
	position={{x:0,y:0,z:0}}
	rotation={{x:0, y:rotation}}
	geometry={new DodecahedronGeometry(size, 1)}
	material={new MeshMatcapMaterial({
		color: new Color('#e0436d')
	})}
/>
<Mesh 
	interactive
	on:pointerenter={cursorEnter}
	on:pointerenter={onPointerEnter}
	on:pointerleave={onPointerLeave}
	position={{x:0,y:0,z:0}}
	rotation={{x:rotation, y:-rotation}}
	geometry={new DodecahedronGeometry(1, 1)}
	material={new MeshBasicMaterial({
		color: new Color('#e0436d').convertSRGBToLinear(),
		wireframe: true
	})}
	receiveShadow
/>
<Mesh 
	rotation={{x:rotationlarge, y:-rotationlarge}}
	geometry={new DodecahedronGeometry(5, 1)}
	material={new MeshBasicMaterial({
		color: new Color('#404040').convertSRGBToLinear(),
		wireframe: true
	})}
/>