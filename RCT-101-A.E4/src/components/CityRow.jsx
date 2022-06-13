import styles from "./CityRow.module.css";

function CityRow({}) {
  return (

    <>
   
    {
      data.map((el,i)=>(

        <tr data-testid="countries-container" className={styles.container} key={i}>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td> {el.country}</td>
        <td>{el.population}</td>
      </tr>
      ))
    }
    </>
  
  );
}

export default CityRow;
