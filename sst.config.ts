import type { SSTConfig } from 'sst';
import type { StackContext } from 'sst/constructs';
import { StaticSite } from 'sst/constructs';

const webApp = ({ stack }: StackContext) => {
	const site = new StaticSite(stack, 'Site', {
		path: 'metacraft',
		buildCommand: 'yarn build',
	});

	stack.addOutputs({
		url: site.url,
	});
};

export default {
	config() {
		return {
			name: 'x-wallet',
			region: 'ap-south-1',
		};
	},
	stacks(app) {
		app.stack(webApp);
	},
} satisfies SSTConfig;
