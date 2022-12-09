import { useCallback, useEffect, useState } from "react";

export default function useMessage(cb) {

	const [activeMessages, setActiveMessages] = useState([]);

    const activeHandler = (message) =>{
        setActiveMessages(message)
    }

	return {activeMessages,activeHandler}
}