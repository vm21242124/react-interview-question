const HOC = (WropperComponent, entity) => {
    return function (props) {
      let data;
      useEffect(() => {
        const fetchData = async () => {
  
          const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
          data=await res.json();
  
        }
        fetchData();
      }, [entity])
      const handleChange=(e)=>{
        data=data.find((item)=>item.name === e.target.value);
      }
  
      return (
        <>
        <input type="text" onChange={handleChange} />
          <WropperComponent {...props} data={data} />
        </>
  
      )
    }
  
  }
  const UserData = ({ data }) => {
  
    return (
      <div>{data?.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}</div>
    )
  }
const TodoData = ({ data }) => {
    return (
      <div>{data?.slice(0, 10)?.map((item, key) => (
        <div key={key}>{item.title}</div>
      ))}</div>
    )
}
const TodoList = HOC(TodoData, "todos")
const UserList = HOC(UserData, "users")
  