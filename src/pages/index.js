import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.MySelect />
		<Box
			height="720px"
			display="none"
			align-items="center"
			justify-content="center"
			max-height="720px"
			box-shadow="inset 0 0 0 8px --color-dark"
		>
			<Text
				margin="0 0 0 0"
				font="--headline1"
				text-align="center"
				text-transform="uppercase"
				color="--dark"
			>
				Тут могла быть
				<br />
				клёвая картинка
			</Text>
		</Box>
		<Image src="https://uploads.quarkly.io/609b923c13e4b0001f829749/images/Temp%20Image.png?v=2021-06-01T09:16:30.510Z" />
		<Components.QuarklycommunityKitFormspree endpoint="https://formspree.io/f/xknqynzb" completeText="sdfsdf" errorMessage="sdfsdfsdfsdfsdfsdf">
			<Input />
		</Components.QuarklycommunityKitFormspree>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});