import { useState } from 'react';
import ListItem from './ListItem'

const ListContainer = () => {

    const [count, setCount] = useState([
        {id: 1, title: 'Javascript'},
        {id: 2, title: 'Python '},
        {id: 3, title: 'C'},
        {id: 4, title: 'C++'},
        {id: 5, title: 'Java'},
    ])

    return (
        <div>
            {count.map(m => <ListItem m={m} key={m.id}/>)}
        </div>
    )
}

export default ListContainer;