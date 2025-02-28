function Welcome() {
  let name = "Ayush";
  let age = 20;
  const bike = ["KTM", "Royal Enfield", "Duke"];

  //   function handleAgeIncrement() {
  //     age = age + 1;
  //     console.log(age);
  //   }
  return (
    <div>
      <h1>Hi {name}</h1>
      <p>I am {age} years old.</p>
      <ul>
        {bike.map((brand) => {
          return <li>{brand}</li>;
        })}
      </ul>
      {/* <button onClick={handleAgeIncrement}>Make me old</button> */}
    </div>
  );
}

export default Welcome;
