<script>
	import { T, useTask, useThrelte } from '@threlte/core';
	import { SoftShadows, useCursor, interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	let rotation = 0;
	let rotationlarge = 0;
	let size = 0.5;

	interactivity();

	const scale = spring(0.7, {
		stiffness: 0.1,
		damping: 0.2
	});
	useTask((delta) => {
		rotation += delta * 1;
		rotationlarge -= delta * 0.0005;
	});
</script>

<T.PerspectiveCamera></T.PerspectiveCamera>

<T.PointLight position={{ x: 0, y: 2, z: 0 }} scale={2} intensity={1.0}></T.PointLight>

<T.Mesh
	rotation.y={rotation}
	scale={$scale}
	on:pointerenter={() => scale.set(1)}
	on:pointerleave={() => scale.set(0.7)}
>
	<T.DodecahedronGeometry args={[1, 1, 1]} />
	<T.MeshBasicMaterial color="#FFFFF" />
</T.Mesh>

<T.Mesh rotation.y={rotation * 0.1}>
	<T.DodecahedronGeometry args={[2, 1, 1]} />
	<T.MeshBasicMaterial color="#FFFFF" wireframe />
</T.Mesh>

<T.Mesh rotation.y={rotation * 0.1}>
	<T.DodecahedronGeometry args={[2, 1, 1]} />
	<T.MeshBasicMaterial color="#FFFFF" wireframe />
</T.Mesh>
