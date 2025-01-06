import React from 'react';
import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-styling';

import '../src/index.css';

const globalDecorator = (StoryFn, context) => {
	const theme = context.parameters.theme || context.globals.theme;
	return (
		<div
			className={`p-4 overflow-auto w-full h-full bg-[${
				theme == null ||
				theme.length === 0 ||
				theme === 'light' ||
				theme === 'astrata'
					? '#F2F3F7'
					: '#333539'
			}]`}>
			<StoryFn />
		</div>
	);
};

export const decorators = [
	globalDecorator,
	withThemeByClassName({
		themes: {
			light: 'light',
			dark: 'dark',
		},
		defaultTheme: 'light',
	}),
];

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: 'light',
			values: [
				{
					name: 'light',
					value: '#ffffff',
					default: true,
				},
				{
					name: 'dark',
					value: '#333539',
				},
			],
		},
	},
};

export default preview;
