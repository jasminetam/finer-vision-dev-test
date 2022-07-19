import React, { useState } from 'react';
import axios from 'axios';
import TitleBar from './components/TitleBar';
import InputFormOne from './components/InputFormOne';
import InputFormTwo from './components/InputFormTwo';
import InputFormThree from './components/InputFormThree';
import Layout from './components/Layout';
import './App.css';
import { DataProps, initialData } from './utils/interface';

function App() {
  const numberOfPages: number = 3;
  const [isOpen, setIsOpen] = useState<number>(0);
  const [data, setData] = useState<DataProps>(initialData);

  const handleSend = async () => {
    if (
      data.day > 31 ||
      data.month > 12 ||
      data.year <= 1900 ||
      data.year >= 2022
    ) {
      alert('please insert valid date');
      setIsOpen(2);
    } else if (data.tele_num > 99999999999) {
      alert('please enter a valid telephone number');
      setIsOpen(2);
    } else if (data.comments === '') {
      alert('please fill in comments');
      setIsOpen(3);
    }

    const dateofbirth = `${data.day}-${data.month}-${data.year}`;

    const submit = await axios.post('http://localhost:3001/users', {
      first_name: data.first_name,
      email: data.email,
      surname: data.surname,
      tele_num: data.tele_num,
      dateofbirth: dateofbirth,
      gender: data.gender,
      comments: data.comments,
    });
    console.log(submit)
  };

  return (
    <Layout>
      <TitleBar
        show={isOpen === 1}
        setShow={() => setIsOpen(1)}
        title={'Step 1: Your details'}
      />
      {isOpen === 1 && (
        <InputFormOne
          data={data}
          setData={setData}
          currentPage={1}
          numberOfPages={numberOfPages}
          setIsOpen={setIsOpen}
        />
      )}
      <TitleBar
        show={isOpen === 2}
        setShow={() => setIsOpen(2)}
        title={'Step 2: More comments'}
      />
      {isOpen === 2 && (
        <InputFormTwo
          data={data}
          setData={setData}
          currentPage={2}
          numberOfPages={numberOfPages}
          setIsOpen={setIsOpen}
        />
      )}
      <TitleBar
        show={isOpen === 3}
        setShow={() => setIsOpen(3)}
        title={'Step 3: Final comments'}
      />
      {isOpen === 3 && (
        <InputFormThree data={data} setData={setData} handleSend={handleSend} />
      )}
    </Layout>
  );
}

export default App;
