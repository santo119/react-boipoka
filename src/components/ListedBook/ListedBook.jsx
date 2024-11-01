import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../utilities/addToDB';
import Books from '../Books/Books';

const ListedBook = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData()

    useEffect(() => {
        const storedReadList = getStoreReadList()
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        console.log(storedReadList, storedReadListInt, allBooks)

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(readBookList)

    },[])

    return (
        <div>
           <h3 className="text-3xl my-8">Listed Book</h3> 
           <Tabs>
                <TabList>
                <Tab>Read List</Tab>
                <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                <h2 className='text-2xl'>Books I Read: {readList.length}</h2>
                {
                    readList.map((book) => <Books key={book.bookId} book={book}></Books>)
                }
                </TabPanel>
                <TabPanel>
                <h2 className='text-2xl'>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;