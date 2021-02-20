export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after finished developing

    // token: 'BQADYEWcEU5qJeEIrmN9mWbfKBBCZb7BfnImQgCIFx4K4BX7FwNUmkRlYO87JfE1gIzCK1xHcEC1-rQVYFQkz24zf6RtJ5W51zE_5ulBGTUGJdorGCtIj0b37T82yn7DPdDwWFBIfJjGKG7GTVc0VTpIt95mN2x-irrdjUbjBDWXcKEO',

};
const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;

    }

}
export default reducer;