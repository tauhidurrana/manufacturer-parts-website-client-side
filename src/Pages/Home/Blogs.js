import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-2xl text-green-500 font-bold mt-10 mb-5'>Q.1)How will you improve the performance of React Application?</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>1</th>
                            <td>Keep component state local where necessary</td>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>
                            <th>2</th>
                            <td>Memoizing React components to prevent unnecessary re-renders</td>

                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>3</th>
                            <td>Code-splitting in React using dynamic import()</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Windowing or list virtualization in React</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Lazy loading images in React</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className='text-2xl text-green-500 font-bold mt-10 mb-5'>Q.2)What are the different ways to manage React Application?</h2>
            <p>
                1) Local state.
                2) Global state.
                3) Server state.
                4) URL state
            </p>

            <h2 className='text-2xl text-green-500 font-bold mt-10 mb-5'>Q.3)How does prototypical inheritence work?</h2>
            <p>
            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.
            objects inherit properties from other objects — the prototypes. That's the idea of prototypal inheritance. JavaScript looks for inherited properties in the prototype of the object, but also in the prototype of the prototype, and so on in the chain of prototypes.
            </p>
        </div>
    );
};

export default Blogs;