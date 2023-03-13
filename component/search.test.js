import {render} from '@testing-library/react';

import SearchField from './search';

it ("checkButtonRender" ,()=>{

const {queryByTitle} = render(<SearchField />)
const btn= queryByTitle("search")
expect(btn).toBeTruthy("lets code")


});