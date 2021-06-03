import React from 'react';
import atomize from "@quarkly/atomize";
const Select = atomize.select();
const Option = atomize.option();

const MySelects = ({
	selectId,
	selectName,
	...props
}) => <Select {...props} id={selectId} name={selectName}>
	    
	<Option value="first">
		Первая опция
	</Option>
	    
	<Option value="second">
		Вторая опция
	</Option>
	    
	<Option value="third">
		Третья опция
	</Option>
	  
</Select>;

export default Object.assign(MySelect, {
	title: "MySelect",
	propInfo: {
		selectId: {
			control: "input"
		},
		selectName: {
			control: "input"
		}
	}
});