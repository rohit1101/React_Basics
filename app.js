function Person(props) {
    return (
      <div className="person">
        <h1>{props.name}</h1>
        <p>Your Age: {props.age}</p>
      </div>
    );
  }
  
  let app = (
    <div>
       <Person name="Rohit" age="28" />
       <Person name="Ravi" age="29" />
       <Person name="Ram" age="49" />     
    </div>
  );
  
  ReactDOM.render(app, document.querySelector('#app'));