import imgHTML from '../public/static/img/stack/html.svg';
import imgCSS from '../public/static/img/stack/css.svg';
import imgJS from '../public/static/img/stack/js.svg';
import imgNode from '../public/static/img/stack/node.svg';
import imgStyled from '../public/static/img/stack/styled.svg';
import imgReact from '../public/static/img/stack/react.svg';
import { FaPython } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { FaDocker } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiDjango } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';

export const stackData = [
	{ title: 'TypeScript', img: SiTypescript },
	{
		title: 'Node JS',
		img: imgNode,
	},
	{ title: 'Express', img: SiExpress },
	{ title: 'Python', img: FaPython },
	{ title: 'Docker', img: FaDocker },
	{ title: 'Django', img: SiDjango },
	{ title: 'PostgreSQL', img: SiPostgresql },
	{
		title: 'JS',
		img: imgJS,
	},
	{
		title: 'Styled Components',
		img: imgStyled,
	},
	{
		title: 'React',
		img: imgReact,
	},
];
