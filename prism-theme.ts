import { PrismTheme } from 'prism-react-renderer';

/**
 * Duotone Dark (Modified)
 *
 * Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
 * Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
 * Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
 */

const theme: PrismTheme = {
	plain: {
		color: '#b794f4',
	},
	styles: [
		{
			types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
			style: {
				color: '#a0aec0',
			},
		},
		{
			types: ['namespace'],
			style: {
				opacity: 0.7,
			},
		},
		{
			types: ['tag', 'operator', 'number'],
			style: {
				color: '#f6ad55',
			},
		},
		{
			types: ['property', 'function'],
			style: {
				color: '#b794f4',
			},
		},
		{
			types: ['tag-id', 'selector', 'atrule-id'],
			style: {
				color: '#ebf8ff',
			},
		},
		{
			types: ['attr-name'],
			style: {
				color: '#d6bcfa',
			},
		},
		{
			types: [
				'boolean',
				'string',
				'entity',
				'url',
				'attr-value',
				'keyword',
				'control',
				'directive',
				'unit',
				'statement',
				'regex',
				'at-rule',
				'placeholder',
				'variable',
			],
			style: {
				color: '#fbd38d',
			},
		},
		{
			types: ['deleted'],
			style: {
				textDecorationLine: 'line-through',
			},
		},
		{
			types: ['inserted'],
			style: {
				textDecorationLine: 'underline',
			},
		},
		{
			types: ['italic'],
			style: {
				fontStyle: 'italic',
			},
		},
		{
			types: ['important', 'bold'],
			style: {
				fontWeight: 'bold',
			},
		},
		{
			types: ['important'],
			style: {
				color: '#d6bcfa',
			},
		},
	],
};

export default theme;
