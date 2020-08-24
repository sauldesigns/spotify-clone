export const initialState = {
	user: null,
	playlists: [],
	spotify: null,
	discover_weekly: null,
	top_artists: null,
	playing: false,
	item: null,
	volume: 100,
	device_id: null,
	shuffle: false,
	repeat: false,
	featured_playlists: [],
	recently_played: [],
};

export const actionTypes = {
	SET_USER: 'SET_USER',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};

		case 'SET_SHUFFLE':
			return {
				...state,
				shuffle: action.shuffle,
			};

		case 'SET_REPEAT':
			return {
				...state,
				repeat: action.repeat,
			};

		case 'SET_DEVICE_ID':
			return {
				...state,
				device_id: action.device_id,
			};

		case 'SET_PLAYING':
			return {
				...state,
				playing: action.playing,
			};

		case 'SET_ITEM':
			return {
				...state,
				item: action.item,
			};

		case 'SET_DISCOVER_WEEKLY':
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};
		case 'SET_RECENTLY_PLAYED':
			return {
				...state,
				recently_played: action.recently_played,
			};
		case 'SET_FEATURED_PLAYLISTS':
			return {
				...state,
				featured_playlists: action.featured_playlists,
			};
		case 'SET_TOP_ARTISTS':
			return {
				...state,
				top_artists: action.top_artists,
			};

		case 'SET_VOLUME':
			return {
				...state,
				volume: action.volume,
			};

		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};

		case 'SET_SPOTIFY':
			return {
				...state,
				spotify: action.spotify,
			};

		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			};
		default:
			return state;
	}
};

export default reducer;
