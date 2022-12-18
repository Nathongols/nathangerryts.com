<script>
	import { 
		Mesh, 
		OrbitControls, 
		PerspectiveCamera,
		useFrame } from '@threlte/core'
	import { 
		SphereGeometry, 
		MeshBasicMaterial, 
		Color, 
		BoxGeometry} from 'three'

	let rotation = 0
	let rotationcamera = 0
	useFrame(() => {
		rotation += 0.001
		rotationcamera -+ 0.01
	})
	
</script>

<PerspectiveCamera 
	position={{ x: 0, y: 0 }}
	rotation={{ x: 0, y:0}}
	>
</PerspectiveCamera>

<Mesh rotation={{x:0, y:rotation}}
	geometry={new BoxGeometry(1, 1, 1)}
	material={new MeshBasicMaterial({
		color: new Color('#FF3E00').convertSRGBToLinear(),
		wireframe: true
	})}
/>
<Mesh rotation={{x:rotation, y:-rotation}}
	geometry={new BoxGeometry(1, 1, 1)}
	material={new MeshBasicMaterial({
		color: new Color('#FF3E00').convertSRGBToLinear(),
		wireframe: true
	})}
/>