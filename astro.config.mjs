// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://comunidad.animaespacio.org',
	integrations: [
		starlight({
			title: 'Ánima Espacio Cultural',
			description: 'Wiki comunitaria de Ánima Espacio Cultural - Crear, explorar y compartir',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/animaec/anima-wiki' },
				{ icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/anima_espacio_cultural' },
			],
			editLink: {
				baseUrl: 'https://github.com/animaec/anima-wiki/edit/main/',
			},
			sidebar: [
				{
					label: 'La Comunidad',
					items: [
						{ label: 'Quiénes somos', slug: '02-quienes-somos' },
						{ label: 'Cómo funciona', slug: '03-como-funciona' },
					],
				},
				{
					label: 'Participar',
					items: [
						{ label: 'Modalidades', slug: '04-modalidades' },
						{ label: 'Servicios y tarifas', slug: '05-servicios-tarifas' },
						{ label: 'Proponer un proyecto', slug: '07-proponer-proyecto' },
					],
				},
				{
					label: 'Información',
					items: [
						{ label: 'Código de convivencia', slug: '06-codigo-convivencia' },
						{ label: 'Estrategia de comunicación', slug: '08-comunicacion' },
						{ label: 'Preguntas frecuentes', slug: '09-preguntas-frecuentes' },
						{ label: 'Contacto', slug: '10-contacto' },
						{ label: 'Mapa del sitio', slug: '00-indice' },
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
