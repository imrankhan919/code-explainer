import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({ explaination }) {
  return (
    <Card sx={{ minWidth: 275, marginTop: "20px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {explaination}
        </Typography>
      </CardContent>
    </Card>
  );
}
