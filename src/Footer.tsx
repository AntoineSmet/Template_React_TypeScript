import { Box, Link } from "@mui/material"

export default function Footer() {
 
  return (
    <footer className="footer">
      <Box
        sx={{
          mt: "2rem",
          mb: 0.4,
        }}
      >
        Made by <Link href="https://github.com/AntoineSmet" underline="hover">Antoine Smet</Link>
      </Box>
    </footer>
  )
}