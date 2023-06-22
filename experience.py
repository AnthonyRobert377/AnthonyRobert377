from datetime import date

def calculate_years_since(year, month, day):
    today = date.today()
    anniversary = date(year, month, day)
    elapsed_years = today.year - anniversary.year
    if today.month < anniversary.month or (today.month == anniversary.month and today.day < anniversary.day):
        elapsed_years -= 1
    return elapsed_years

if __name__ == '__main__':
    anniversary_year = 2016
    anniversary_month = 7
    anniversary_day = 1
    years_since = calculate_years_since(anniversary_year, anniversary_month, anniversary_day)
    print(f"It has been {years_since} years since the anniversary.")
