type PrintOptionsType = {
	printerURL?: string;
	isLandscape?: boolean;
	jobName?: string;
	uri?: string;
} & ({ html: string } | { filePath: string } | { uri: string });

type SelectPrinterOptionsType = {
	x: string;
	y: string;
};

export function print(options: PrintOptionsType): Promise<any>;

export function selectPrinter(options: SelectPrinterOptionsType): Promise<any>;
