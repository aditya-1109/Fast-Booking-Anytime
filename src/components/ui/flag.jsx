import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Flag from "react-world-flags";

// Sample Currency Data
const currencyData = {
  commonlyUsed: [
    { code: "IN", currency: "INR", symbol: "₹", name: "Indian Rupee" },
    { code: "US", currency: "USD", symbol: "$", name: "United States Dollar" },
    { code: "EU", currency: "EUR", symbol: "€", name: "Euro" },
    { code: "SG", currency: "SGD", symbol: "$", name: "Singapore Dollar" },
    { code: "AU", currency: "AUD", symbol: "$", name: "Australian Dollar" },
    { code: "GB", currency: "GBP", symbol: "£", name: "British Pound" },
    { code: "AE", currency: "AED", symbol: "د.إ", name: "UAE Dirham" },
  ],
  allCurrencies: [
    { code: "AL", currency: "ALL", symbol: "L", name: "Albanian Lek" },
    { code: "AM", currency: "AMD", symbol: "֏", name: "Armenian Dram" },
    { code: "AR", currency: "ARS", symbol: "$", name: "Argentine Peso" },
    { code: "AW", currency: "AWG", symbol: "ƒ", name: "Aruban Florin" },
    { code: "BD", currency: "BDT", symbol: "৳", name: "Bangladeshi Taka" },
    { code: "BM", currency: "BMD", symbol: "$", name: "Bermudian Dollar" },
    { code: "BN", currency: "BND", symbol: "$", name: "Brunei Dollar" },
  ],
};

const CurrencyPicker = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [usedflag, SetusedFlag]= useState(currencyData.commonlyUsed[0]);

  const filteredCurrencies = (list) =>
    list.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) || item.currency.includes(search)
    );

  return (
    <>
      {/* Trigger Button */}
      <Button
  onClick={() => setOpen(true)}
  className="flex items-center gap-2 text-black text-sm font-semibold hover:text-black"
>
  <Flag code={usedflag.code} style={{ width: 24, height: 16, borderRadius: 2 }} />
  <p>{usedflag.currency}{usedflag.symbol}</p>
  <KeyboardArrowDownIcon fontSize="small" />
</Button>



      {/* Currency Picker Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle className="flex justify-between items-center">
          <span className="text-lg font-semibold">Currency Picker</span>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          {/* Search Input */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search currencies"
            size="small"
            className="mb-4"
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Commonly Used Currencies */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Commonly Used Currencies</h3>
            <div className="grid grid-cols-2 gap-4">
              {filteredCurrencies(currencyData.commonlyUsed).map((item) => (
                <div key={item.code} onClick={()=>SetusedFlag(item)} className="flex items-center gap-2">
                  <Flag code={item.code} style={{ width: 24, height: 16, borderRadius: 2 }} />
                  <span className="text-sm font-medium">{item.currency} - {item.symbol}</span>
                </div>
              ))}
            </div>
          </div>

          {/* All Other Currencies */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">All Other Currencies</h3>
            <div className="grid grid-cols-2 gap-4">
              {filteredCurrencies(currencyData.allCurrencies).map((item) => (
                <div key={item.code}  onClick={()=>SetusedFlag(item)} className="flex items-center gap-2">
                  <Flag code={item.code} style={{ width: 24, height: 16, borderRadius: 2 }} />
                  <span className="text-sm font-medium">{item.currency} - {item.symbol}</span>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CurrencyPicker;
