'use strict';
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website(blog)',
		url: 'https://blog.hatena.ne.jp/gdgd-shinoyu'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/shinoyu'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/shinoyu'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I’m a application developer.</Text>
			<Text>work: EC-platform, mobile-game.</Text>
			<Text>skill: Ruby, C#, Javascript, </Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
