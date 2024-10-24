import { createContext, useState } from 'react'
import { dataToDo } from '../interface/contextInterface';

const AppContext = createContext<ValueToShare>({} as ValueToShare);

interface ProviderProp {
    children: React.JSX.Element
}

interface ValueToShare {
    data: dataToDo[];
    addToDo: (title: string) => void;
    updateSuccess: (id: number, isSuccess: boolean) => void;
    deleteToDo: (id: number) => void;
}

const initialState: dataToDo[] = [
    { title: "Learn HTML", id: 1, timeStamp: "18/10/2024", success: true },
    { title: "Learn CSS", id: 2, timeStamp: "18/10/2024", success: false },
    { title: "Learn JavaScript", id: 3, timeStamp: "18/10/2024", success: false }
]

function Provider({ children }: ProviderProp) {
    const [data, setData] = useState<dataToDo[]>(initialState)

    const valueToShare: ValueToShare = {
        data,
        addToDo: (title: string) => {

            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); // เดือนใน JavaScript เริ่มจาก 0 จึงต้อง +1
            const year = date.getFullYear();
            const timeStamp = `${day}/${month}/${year}`;

            const createNewData = {
                title,
                id: Date.now(),
                timeStamp,
                success: false
            }
            setData((prev) => [...prev, createNewData])
        },
        updateSuccess : (id:number,isSuccess:boolean) => {
            const updateData = data.map((item)=>item.id === id? {...item,success:isSuccess}:item)
            setData(updateData)
        },
        deleteToDo : (id:number) => {
            setData((prev)=>prev.filter((toDo)=>toDo.id !== id))
        }
    }
    return (
        <AppContext.Provider value={valueToShare}>
            {children}
        </AppContext.Provider>
    )
}

export { Provider }

export default AppContext