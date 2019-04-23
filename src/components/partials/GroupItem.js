import React, { Component } from "react";

export default class GroupItem extends Component {
  render() {
    const { groupData } = this.props;
    return (
      <div className="groups__list--item">
        <div className="groups__list--item-picture">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADUANQDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAEHBQYIBAMC/8QARRAAAQQBAgQDBAcEBgkFAAAAAQACAwQFBhEHEiExQVFhExQicSNCUnKBkaEyM2KCkpOisbLBFRYkNGNzo8LhQ1SkxPD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AttEUIJREQERQglERARQpQERQglERARFCCUREBFClARFCCUREBEUIJREQEREBERAReTIZHHYqpPeyFmOvVhG75JN9tz2a1o3cXHwABJVO6h4rZe2+SvgY/cKoJaLMzWSXJR1G4Dt42g/In1HYBdhIaC5xAaOpJ6AD5lfNk9aR3LHNE93kyRjj+QK5WuZHKZB5kvXbdqQnfmtTySn8OcleUEgggkEdiOhQdcIuZsVrHVuGcz3PKWTE0j/Z7TjYrkeXs5d9vw2Pqrd0lxGxeffFQvsZRyryGxt5t6tp58IXuO4cfBp/Ak9AG+IiICIiAiIgIvHkcljcTUmvZGzHXqwj45JN+pPZrGjdxcfAAEqndQcVsxbfJBgYxQq7losTNZLckHUbgO3jbv5AOP8AF5Bd3mfBflr4378j2u278rgdvyK5UuZPLZB5kvX7lp5O+9meWX8ucleVr3sIcxzmuB3BaSCD6EIOt0XNeJ1vrHDuZ7vk55oW7A177nWYC0HflAkPMB91wVvaT4g4jURjp2WijliAGwPfzQ2SO5ryHbr48p6+XNsSA3ZERAREQEREBERAX4lligimnme2OGGN8ssjzs1kbGlznOPkB1K/ar7ipmH4/AQ4+JxbNmLBhft0PusAEkuxHmSwH0JQVhrPVlrU+Re5rnsxdZ7mY+uenw9vbSAdOd3c+Q6eG7tXREBERAUgkEEbggggjoVCIL34c6wlztV+KyMvNlKEQfHK8/HcqghvO4+L29A7z3B6ncqwVy1gcrNhMxi8pEXf7LYY+Vre74HfBKz8WkhdRscx7WvYQ5j2hzXDsWkbghB+kREBfKeeCtBPYnkbHBXikmmkedmxxxtL3Od6AAlfVVzxYzD6WEqYyJxbJl53CXbv7rW5Xvb069XFn4AjxQVnrDVdzVGRfLu+PG13PZj6xOwbHvt7WQDpzu7ny7eG51lEQEREBS1z2OY9jnNexwc1zSQ5rgdwQR13UIgv7h5q92oaUlG88HL49jTI47b2q+4aJ9vtA7B/zB+tsN6XMGmMxJgs7ickHERxTtZaA7PrSfRytI+RJHqB5Lp4bEAjqPA+aCUREBERAREQFSvGGV5y2CgJPJHjpJmjwDpZ3NP+EK6lTvGKo4WdO3wCWyQWqjz4NMT2ytB+fM78kFUoiICIiAiIgLqDTErp9N6Zled3vw+P5ie5cIGNJXMlevZtTRV60Ms88ruSKKBjpJHu8msYCT+S6jwtR9DD4Wi8bSU8dSrSffihax3b1BQZBET/APdkBUhxflec9iYN/gjxEcrR/FLZnDv8IV3qm+L+Otm9h8qyGV1Y0jSllaxxjikjmdI0SOA2Bdznbc9dj5IKrREQEREBERAXU2BmfYwenrDzu+fFY6Z5PcufXY4lctAFxDWgkk7AAbkk9AAAurMZVNHG4qke9OjUqn5wxNj/AMkHrREQEREBQpRAWsa4wL9Qaeu1YWc1yuW3qI8XTwg7xj1c0uaPUjyWzr5umrtljgdLG2eVkkkUTntEkjI+UPcxhO5A3G526bjzQclkEEgggg7EHoQQitziFoGaSWxn8HAXmQumyVKJu7+c9XWIGjvv3eB1369dzy1GgIiICyOFw2Sz2Qr43Hxc88xJc524ihibtzSyuA6NHj+AG5IBxy6I0NpqDTOFbLaa2PI3I228lJIQ32DQ3mbAXHoAwftde+/htsHpwGmtPaOx8kofEJmRc2Qydrkjc4DYu+Jx2bH5NB8Bvuep07UHFqKJ8lfTtVs3KS336814jPcbwwAh23iC4j7q1PXOs7OpLklWrI9mFqyEVoxu33l7envEo79fqg9h6krS0GxXNba3vOc6bOX2b/VqSe6sA8uWsGheSPU2rIXc0eezDT3/AN+skH5gv2WIRBvmJ4pauoPY286HJ1xsC2w1sU4aPsTwtHX1c1ytfAaq03q2tLFAW+2MRFzHXWsMnsz8LvgO7XM8Nxv3G4G+y5sX3qW7dGzXt05pILNd4khliPK9jh4g/of/ACgsXXnD4Yxk+awbHHHgl92mN3Opg95YvEx+Y7t79W/u6zXRujNU19V4pxnbG3IVQIMlXABY7nBDZWtP1H9engQR6uqDXumRpzMuFdhGNyAfao99o/i2kg3P2CRt6OHig1FERARFk8Lg8vn7sdHGwGSVxBke7dsMEe/WSZ+x2aPzPYAk7EM9w8wL81qGpK9hNLFOjv23EfCXMdvDEfDdzh28mnyXQywensFi9K4hlSORgEbXWb9ublj9tKG7vlkJOwaANgN+gHcncnOAg7bHcbbjZBKhSiAiIgIn4ryZHIUsVRu5C7J7OtUidNK7puQOga0H6zjsGjxJQYnVeqaGlsebM20tufmjoVd9nTyADdzvEMbuOY+oHc9ef7Oo9QWsw3OyXpRko5BJBKw7CEDfaONn7IZ1I5dtjud9+Y7tRZ6/qLKWclbJHOfZ1odyWV67SeSJny7np1JJ8ViEF/6R4g4rPsgp33xUsxs1ns3HlgtO7c1d7vE/ZJ38t9unp1Dw/wBMZ98tkxvpX37udZpBrfaPPjNC4ch8yehPmud1t2F4havwrY4W2m3arAGtgyIdMGtHQBkoIlG3gOfb0QZm7wi1NC4+5Xsdai+qZHS15T82Frm/214o+FeuHu2dHQjH2pLbSP8Aptcf0Wz1eMdQtaLuEnY4bczqllkgJ8wyVjSP6RXrfxg06G7xYvKuf5SGsxv9ISOP6IPPp7hQaNyjfy+RhmdVnisCpTjcYnvjcHtD5ZtiW7jqPZ9fNZXilmn43Ax0IHls+ZlfXcQdiKkQD5tiPPdjT6OK9+jtZP1bNmQ3HinBj2U+TmnM0kjpzL1dsxoA+H/z5aBxfsOfnsVW3PJBiWSgeAfNPKHH8mtQVsiIgIiICIiDZdE5t+C1FjLJeW1rEjaN0b7NNedwaXO+6eV38vqry1XpenqrHx0p5n15YJ/b1rEbGvdG/lLC1zXEbtO/Ucw7Dr0XNC6mp3JpcHSyADXTSYmC4GuJDXSOrCXYkddiUFOXOEurIHO90sY63H9QiV8Ep+8yRvKP6ZXji4Xa6kdyurVIh9qW5CW/9LmP6LbqvGLGOa337DXInbDmNSeKcE+YEojP6r1P4v6YDSY8dl3P26B7ajG7+pErv7kGMxPCDZ7JM3lGuaOrq+Mafi8etiYA7ef0f4hWJDX0xpPGP9m2pjcdD8Uj3Hl537bAve7d73nbYdST2HkqwyPGDKStczF4qtW3BAltyusvH8TWNDGg/PmVfZXNZvNz+8ZS9PakG/IJHARx79xFG3ZjR8mhBtut9f2NQ8+Nxokr4djgZC74ZrzmncOlA7MHdrfxPXYM9mgtfSYt9fDZmYuxjy2KpZlO7qJPQNe4/wDpf4fl0FbIg63BBAIIIIBBHYhSqt4X6udbibpzIS72K0Rdi5HnrLAwburknxYOrf4dx9TraX4oCJ+KICprixqJ01mvp2s/6Kr7O3keU/tWHt3iiPo1p5j6uHi1W5fuwY6lfvz9Iadae1L1AJbEwvIG/idth81yzeuWMjdu37Luae5Ylsynw55HF5A9B2CDzIiICIiAiIgtTg5OxtzUtbf45q1Kdo8S2GSRhP8AbC8vF+s5mcxFrb6OfFCEHzfBPIXfo9qwHD/LNxGqMXJI7lgul2NncewbY2DCT5BwYSrS4nYR+V0+bkDC6zhpHWwANy6s4Bs4A9AGvPowoKCREQEREBERAG57d109MP8ARWlpmyEA43APa7fzr0+U/wByorQmDkzmosdG5hNSk9t+64j4fZQuDmsO/T43bN+RPkrW4nZZmP0zPVa4CxlpmU4wD8QiaRLM/by2AafvoKAREQEREBERB96du1QtVbtWQx2Ks0c8Lx9V7CHDf08109gcvXzuJx2Ug2DbUIdIwHf2UzSWSRn7pBH6+K5aVscIcyWy5bBSv+GRoyNQHsHt5YpmjfzHIR90oLgREQaDxVyJp6a90Y7aTKXIa7gO/sYt7DyPxa0H5qhVaPGK2X5HAUN/hgoz29vWxL7Pr/VqrkBERAREQERb3w+0d/rBcOQvxn/Q9GQB7TuPfLA2cIR/COhf+A+tu0PZoXh8/MCHL5lj2YvcPrVtyyS7sf2nEdRH+p8Nh1N3kNLS0gFpHKQRuCD02O6w+fz2K0xjXXbZADR7KpWi2bJYkA+GOMdgB4nbYD8jRx1/qk59mdNj4mc0TaW7hUFVxBMHJv2OwO/fcA+HQPdr3RM+AtTZLHxOfhbMnMOQEmhI8/upP4Cf2D+B6jd+iLpfAalwGq6TzWcx0hiLb2PshrpYg4crmvY7o5h32BA2O/geg1LUHCjHXHy2cDYbRlcXONSxzPqFx6/Rvbu9o9NnDy2QUqi2u5w813Tc4HEvsMHaSnLFM1w8w1ruf82heSLRet5ncrMDkQf+LCYm/wBKUgfqg19eqhj8hlLdejQryT2rDuWOOMdT5ucT0AHcknYLfMRwm1Hacx+VnrY6Dfd7GubZsn0DYj7L8fafgVamE07pzStSb3OJkQEfPcu23tM0jWDcummds0NHfYAAd9vEh8dIaXq6WxjawLJb1kslyFho6SSgHZjNxvyM3Ib8yenNsPlq/SFHVVRgdIYMjVbJ7jY3cYwXbExzMHQtdsOu247j7Lq/13xEGQZNhsDI8UnHlu3m7sfZAP7qDxEf2j3d26N/eZPQPEF9p9fB56few7lix96U9Zj2bBYcfr+DXePY9ergqnJY3IYm7ZoX4HQ2a7+WRjuxHcOaR0LT3B8V410VrbSMGp8eXQtYzLU2OdRmOzfaDua0p+y7w8j17Eh3PEsU0Es0EzHRzQyPiljeC17JGEtc1wPXcHoUH4REQEREBZvSmSOJ1Fgb3MGsjuxRzknYCCf6CUn+VxKwiIOuEXgw1s38Rhbp6ut4+nYd96SFrj+u6IKP4pymTVlhhO/u9GjCPTdhl/7loyu3WXDi/n8pczFDI12TWGQNNW3G9jG+xibFu2aPmPXbfqz8VXGQ0HrfHc5lxFiaNp6SUeW00jz5YSXgfNoQayi/csM8D3RTxSRSN/aZKxzHj5tcAV+EBERBkMNirmbydDF1B9NblDOYjdsUY+J8rvRo3J+S6UrwYfTGFZE1za+NxVVznvftvytBe+R23dzjuTsOpPqtC4TYEV6VvPzs+lvF9SkSP2a0TvpHg/xOG38nqvBxY1G4yV9N1ZCGRiO3lOU/tPcOaGB3yHxn7zfsoNF1TqS7qfKTXpuZldm8VGtv8NeAHoPLmd3efP0AAwKIg+1a1bpTxWak8sFiF3NFLA90cjD23a5p3Vi4bi1mqrWQ5inFfYNh7eFwrWdvNwAMZ/ot+arREF+1eKmiLABmffqHxFiqX7H0NZz16ZOJfD9jSW5KWQj6sdK4HH+sjaP1XPKILnyXF/Extc3FYu3Yk2IEl1zK8QPmGxl7iPxaq3z+r9S6jPLkLXLWDuZlOsDFVaR1BLNySR4FxJWARAREQXzw61e7O0nYzIS82Vx8bdnvO77lUbNEp8S5vQP89wfE7a9xV0w2N7NS049myOjr5VrB0Eh+GOwdvtdGu9eX7RVbYfKXMLkqGTqO2mqTNkA32bIzs+J3o4bg/NdKsditTYNrtva4/L0eoO3MGTN2I8dnNP5Fvog5bRe3K46ziMlkcbZ/fUrEkDjsQHhp+F7QfBw2cPmvEgIiICL30cLnckW+4Yy9aBO3NXryvYPvPA5R+JW247hZrK4WutNqY+M7E+9TCSXl82x1+br6FwQWroGUz6Q02/fflrSw/wBTPJFt+iLIaaw3+r2Fx+I94Nn3T2+8xj9lzmWZ852ZzO225tu/giDLqFKhB8p6tS0z2dqvBPH4ssRslb+TwQsFa0Roe5v7XBUW7/8AtWvqn/4zmrY0QaJY4V6Im39nHfrb9vd7Zdt/XtesdLwf06f3OUyrP+Z7tJ/hjarMUIMa0Y/TmEA6to4bHEntzOjrRbn5udt+JPquZMhes5O9eyFl289yxLYl77B0ji7lbv4DsPkrv4q5M09NtpMdtJlbkUDgOh9hD9O8j8QwH5qhkBERAREQEREBERAREQFcnCLNGWrk8FM/d1R3v9ME9fYSuDJWgeTXcp/nKptbJofJnFaowc5cRFPYFGwN9gY7X0PxegJa7+VBb2peHuK1Lkxk5blirI6vFBM2vHG4SujJDZC5/XfbZvb6oWPh4RaTZsZbuXlIHUe1rMaT/LDv+qsVEGn1+GugoOUuxj53D61i1adv82se1v6LOVNO6ZoFrqeHxsLxts9lWH2nT/iFpd+qyqII27DwUooQSiIgIiICIiAiKEFK8YLhky+FoA7sq499nbyfZlLSD+EbfzVZLc+Jsxl1hlmb7ivDQhb6D3aOXb83FaYgIiICIiAiIgIiICIiApY5zHNewlrmEOa4dCHA7ghQiDq7H2m3qOPut/Zt1K1obeU0bZP816lruiZzY0ppl5O/Lj44f6hzof8AtWxICIiAiIgIiICIiAiIgKFKIKb1xoPVmQzeVzFCCC3XtuheyOGZrbDGxwsi+Jk3KPDwcVW93GZbGv5MhQuVXbkAWoJIub7peACurF+XMY9rmPa1zHDZzXAOaR6g9EHJKLpm5o7Rl/mNnB4/mdvzPgi92eSfEvrFrv1WAtcKdFzkmE5Gp5CCy17fysMef1QUKiuKfg5Sdze652xGN+gsVI5enqWSM/uWPk4O5Qb+xzVN48Pa15o/8LnIKtRWQ7hBqjf4MjhiP4pLbf7oCoHCDVfjkMLt6S3D/wDXQVwis6Pg9nD+9y2Nb/y2WH/3tavbDwb7GxqAbeLYaP8A3Pm/yQVIivCvwi0vHymxfyk5HcNfXhYfwEbnf2lnanD3QdMhzcRHM8fWtzTzg/Nj38n9lBzoyOSR7Y42Oe952a1jS5zj5ADqtjx2hdbZMsMOIswxk9Zb21VgH2tp9nkfJpXRNTH4yg3ko0qlVn2asEULfyjaF6UGF0ribeDwGJxVuSGSxUZOJH1y8xEyTyTANLwD0DgOw7LNoiAiIgIiICIiAoUogIiIChSiAiIghSiIChSiAiIgKFKICIiCFKIgKFKICIiAoUogIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//2Q=="
            alt=""
          />
        </div>
        <div className="groups__list--item-name">
          <h4>{groupData.name}</h4>
        </div>
      </div>
    );
  }
}