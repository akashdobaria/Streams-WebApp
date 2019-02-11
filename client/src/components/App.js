import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';

const App = () => {
    return (
        <div className='ui container'>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streams/edit' exact component={StreamEdit} />
                    <Route path='/streams/delete' exact component={StreamDelete} />
                    <Route path='/streams/show' exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

//1065979095461-4goakil4bup74a2vdc68fa3hhjgrl44n.apps.googleusercontent.com