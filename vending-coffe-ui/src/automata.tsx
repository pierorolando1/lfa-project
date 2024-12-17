import useSWR from "swr"

export const useAutomata = (s: string) => {

    const { data, error, isLoading } = useSWR<
        { isFinalState: boolean, states: string[] }
    >(s, () => fetch(`http://localhost:5000/acepted/${s}`).then(res => res.json()))

    return {
        data,
        error,
        isLoading
    }
}
