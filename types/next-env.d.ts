/// <reference types="next" />
/// <reference types="next/types/global" />

interface FrontMatter {
	__resourcePath: string;
	title: string;
	publishedAt: string;
	updatedAt?: string;
	summary: string;
}
