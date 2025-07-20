tailwind.config = {
    theme: {
        extend: {

            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px,1fr))'
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Poppins: ["Poppins", "serif"]
            },
            animation: {
                spin_slow: 'spin 6s linear infinite'
            },
            colors: {
                lightHover: '#f0f5ff',
                darkHover: '#02113b',
                darkTheme: '#01091f'
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #000',
            }
        }
    },
    darkMode: 'selector'
}