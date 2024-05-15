import { Box } from "@mui/material";

//COMPONENT FOR FOOTER INFO
function Footer () {
return (
    <Box id="footer">
        <Box>©2024 Find Happy Hour</Box>
        <Box>
            <ul className="list-un-styled footer-nav">
                <li>Home</li>
                <li>About</li>
                <li>Privacy Policy</li>
            </ul>
        </Box>
    </Box>
)
}

export default Footer;