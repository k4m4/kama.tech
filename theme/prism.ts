import { theme } from '@chakra-ui/react';
import { PrismTheme } from 'prism-react-renderer';
const { colors } = theme;

/**
 * Duotone Dark (Modified)
 *
 * Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
 * Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
 * Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
 */

const customTheme: PrismTheme = {
	plain: {
		color: colors.purple[300],
	},
	styles: [
		{
			types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
			style: {
				color: colors.gray[400],
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
				color: colors.orange[300],
			},
		},
		{
			types: ['property', 'function'],
			style: {
				color: colors.purple[300],
			},
		},
		{
			types: ['tag-id', 'selector', 'atrule-id'],
			style: {
				color: colors.blue[50],
			},
		},
		{
			types: ['attr-name'],
			style: {
				color: colors.purple[200],
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
				color: colors.orange[200],
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
				color: colors.purple[200],
			},
		},
	],
};

export default customTheme;
