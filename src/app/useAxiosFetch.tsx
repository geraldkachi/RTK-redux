import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


const useAxiosFetch = (url: any) => {
    const [data, setData] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {

        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url: string) => {
            setisLoading(true)
            try {
                const res = await axios(url, {
                    cancelToken: source.token
                })
                if (isMounted) {
                    setData(res.data)
                    setFetchError(null)
                }
            } catch (error: any) {
                console.log(error)
                if (isMounted) {
                    setFetchError(error.message)
                    setData([])
                }
            } finally {
                isMounted && setisLoading(false)
            }
        }
        fetchData(url)

        const cleanUp = () => {
            console.log(`leanup`)
            isMounted = false
            source.cancel()
        }

        return cleanUp

    }, [url])
    return { data, fetchError, isLoading }
}

useAxiosFetch.propTypes = {}

export default useAxiosFetch