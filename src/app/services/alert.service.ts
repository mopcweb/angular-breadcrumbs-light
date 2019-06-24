/* ################################################################### */
/*
/*  Service for managing alert over app (show, close)
/*
/* ################################################################### */

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

/* ------------------------------------------------------------------- */
/*                              Config
/* ------------------------------------------------------------------- */

@Injectable({
  providedIn: 'root'
})

/* ------------------------------------------------------------------- */
/*                              Service
/* ------------------------------------------------------------------- */

export class AlertService {

  private important = false;

  /* ------------------------------------------------------------------- */
  /*                            Constructor
  /* ------------------------------------------------------------------- */

  public constructor(private alert: MatSnackBar) { }

  /* ------------------------------------------------------------------- */
  /*                         Ok alert shortcut
  /* ------------------------------------------------------------------- */

  public ok = (msg: string, important = false, time = 3000, action = '✗', pos: any = 'top') =>
    this.show(msg, important, 'ok', time, action, pos)

  /* ------------------------------------------------------------------- */
  /*                         Info alert shortcut
  /* ------------------------------------------------------------------- */

  public info = (msg: string, important = false, time = 3000, action = '✗', pos: any = 'top') =>
    this.show(msg, important, 'info', time, action, pos)

  /* ------------------------------------------------------------------- */
  /*                         Warn alert shortcut
  /* ------------------------------------------------------------------- */

  public warn = (msg: string, important = false, time = 3000, action = '✗', pos: any = 'top') =>
    this.show(msg, important, 'warn', time, action, pos)

  /* ------------------------------------------------------------------- */
  /*                         Error alert shortcut
  /* ------------------------------------------------------------------- */

  public error = (msg: string, important = false, time = 3000, action = '✗', pos: any = 'top') =>
    this.show(msg, important, 'error', time, action, pos)

  /* ------------------------------------------------------------------- */
  /*                               Close
  /* ------------------------------------------------------------------- */

  public hide = () => {
    this.alert.dismiss();
  }

  /* ------------------------------------------------------------------- */
  /*                               Show
  /* ------------------------------------------------------------------- */

  private show = (
    msg: string, important = false, type: 'ok' | 'info' | 'warn' | 'error' = 'ok',
    time = 3000, action = '✗', pos: any = 'top'
  ) => {
    // If important is showing -> stop
    if (this.important)
      return;

    // Set importance
    this.setImportance(important, time);

    // Show
    this.alert.open('☞ ' + msg, action, {
      duration: time,
      panelClass: ['Alert', `Alert_${type.toLowerCase()}`],
      verticalPosition: pos
    });
  }

  /* ------------------------------------------------------------------- */
  /*                          Set importance
  /* ------------------------------------------------------------------- */

  private setImportance(important: boolean, time: number) {
    // If false -> return
    if (!important)
      return;

    // Specify importance
    this.important = important;

    // Set timeout to remove importance
    const timer = setTimeout(() => {
      // Remove importance
      this.important = false;

      // Clear timeout
      clearTimeout(timer);
    }, time + 4);
  }

}
