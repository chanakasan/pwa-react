import React from 'react';
import Editor from "@monaco-editor/react";
import styles from './App.module.css'

const Header = () => (
  <div className={styles.header}>
  </div>
)

function App() {
  return (
    <div className={styles.container}>
      <Header />
       <Editor
         height="50vh"
         defaultLanguage="javascript"
         defaultValue="// start coding"
       />
    </div>
  );
}

export default App;
