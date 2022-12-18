<script>
	import { 
		Mesh, 
		OrbitControls, 
		PerspectiveCamera,
		useFrame } from '@threlte/core'
	import { 
		DodecahedronGeometry, 
		MeshBasicMaterial, 
		Color, 
		BoxGeometry} from 'three'

	let rotation = 0
	let rotationcamera = 0
	useFrame(() => {
		rotation += 0.001
		rotationcamera -= 0.0005
	})
</script>

<PerspectiveCamera 
	position={{ x: 0, y: 0, z:4}}
	rotation={{ x: 0, y:0}}
	>
</PerspectiveCamera>

<Mesh rotation={{x:0, y:rotation}}
	geometry={new DodecahedronGeometry(0.5, 1)}
	material={new MeshBasicMaterial({
		color: new Color('#fa82a2').convertSRGBToLinear(),
		wireframe: true
	})}
/>
<Mesh rotation={{x:rotation, y:-rotation}}
	geometry={new DodecahedronGeometry(1, 1)}
	material={new MeshBasicMaterial({
		color: new Color('#e0436d').convertSRGBToLinear(),
		wireframe: true
	})}
/>
<Mesh rotation={{x:rotationcamera, y:-rotationcamera}}
	geometry={new DodecahedronGeometry(5, 1)}
	material={new MeshBasicMaterial({
		color: new Color('#404040').convertSRGBToLinear(),
		wireframe: true
	})}
/>