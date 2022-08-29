import style from './List.module.scss'

const List = () => {
  const listRender = [
    {
      id: 0,
      tarefa: "JavaScript",
      tempo: "02:10:00",  
    },
    {
      id: 1,
      tarefa: "React typeScript",
      tempo: "01:15:20"
    }
  ]
  
  return(
    <aside className={style.listaTarefas}> 
      <h2>Estudos do dia</h2>
      <ul>
        {
          listRender.map((item, id) => (
            <li key={id} className={style.item}> 
              <h3>{item.tarefa}</h3>
              <span>{item.tempo}</span>
            </li>
          ))
        }
      </ul>
    </aside>    
  )
}

export default List