const apiRequest: any = async (url = '', optionsObj = {}, errMsg = null) => {
    try {
        const res = await fetch(url, optionsObj)
        if (!res.ok) throw Error('Please reload the app')
    } catch (error: any) { 
        console.log(error)
        errMsg = error.message
    } finally {
        return errMsg
    }
}

export default apiRequest