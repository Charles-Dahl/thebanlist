import * as yup from "yup";

export const communityNameSchema = yup
	.string()
	.required("Please enter a community name");

export const searchTermSchema = yup
	.string()
	.required("Please enter a search term");

export const displayNameSchema = yup
	.string()
	.required("Please enter a display name");

export const emailSchema = yup
	.string()
	.email("Please enter a valid email address")
	.required("Please enter an email address");
