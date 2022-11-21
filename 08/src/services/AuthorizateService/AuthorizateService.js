
async function AuthorizateService (credential) {

    try {
        const require = await fetch('', {
            method: 'POST',
            body: JSON.stringify(credential) 
        });    
        const token = await require.json();
    
        return token;
    }
    catch {
        return '500-ServerError';
    }
    
}

export default AuthorizateService;