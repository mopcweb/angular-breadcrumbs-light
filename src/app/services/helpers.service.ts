/* ################################################################### */
/*
/*  Helpers
/*
/* ################################################################### */

import { Injectable } from '@angular/core';

/* ------------------------------------------------------------------- */
/*                             Config
/* ------------------------------------------------------------------- */

// =====> Config service
@Injectable({
  providedIn: 'root'
})

/* ------------------------------------------------------------------- */
/*                             Service
/* ------------------------------------------------------------------- */

export class HelpersService {

  /* ------------------------------------------------------------------- */
  /*                           Constructor
  /* ------------------------------------------------------------------- */

  public constructor() { }

  /* ------------------------------------------------------------------- */
  /*                       Remove params from url
  /* ------------------------------------------------------------------- */

  public removeParams = (url: string): string => url.replace(/\?.*/gi, '');

  /* ------------------------------------------------------------------- */
  /*                        Uppercase first letter
  /* ------------------------------------------------------------------- */

  public makeFirstLetterUp = (item: string): string =>
    item.slice(0, 1).toUpperCase() + item.slice(1);

  /* ------------------------------------------------------------------- */
  /*                             Find param
  /* ------------------------------------------------------------------- */

  public findParam = (link: string): boolean =>
    link.indexOf('/:') !== -1;

  /* ------------------------------------------------------------------- */
  /*                  Find min length & it's link index
  /* ------------------------------------------------------------------- */

  public findMin = (arr: any) => {
    // Define first vars
    let min = arr[0].link.length;
    let index = 0;

    // Iterate over array
    for (let i = 1; i < arr.length; i++) {
      // Define current link length
      const v = arr[i].link.length;

      // Update if is less
      min = (v < min) ? v : min;

      // Update index
      if (min === v)
        index = i;
    }

    // Return
    return { min, index };
  };

}
