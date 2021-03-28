import React from "react"
import { useState, useEffect } from 'react'
import { APIError, DataState, SearchResult } from "../d"
import { generateSearchUrlFromID } from "../helpers/search"
import "../assets/scss/single_result.scss"
import axios from "axios"
import SingleResult from "./single_result"

interface SingleResultPageProps {
    id: string
}

const SingleResultPage: React.FC<SingleResultPageProps> = props => {
    const initSearchDataState: DataState = {
        isFetching: false,
        hasFetched: false,
        response: null,
        filteredResponse: null,
        filters: null
    }
    const [dataState, setDataState] = useState(initSearchDataState)
    const {id} = props

    const getSearchResultFromID = (id: string): any => { //eslint:disable
        setDataState({...dataState, isFetching: true, filteredResponse: null})
        const url = generateSearchUrlFromID(id)
        axios.get(url).then((response: any) => {
            const data = response.data
            setDataState({response: data, isFetching: false, filteredResponse: data, filters: null, hasFetched: true})
        })
        .catch((message: APIError) => {
            return new Error(`${message.code}: ${message.error}`)
        })
    }

    useEffect(() => {
        getSearchResultFromID(id)
    },[])

    console.log(JSON.stringify(dataState))

    if (dataState.response) {
        return <SingleResult result={dataState.response as unknown as SearchResult} fullView={true} />
    }



    

    return <div>Loading...</div>

}

export default SingleResultPage